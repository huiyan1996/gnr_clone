<template>
    <div class="adminTable table-responsive">
        <div v-if="exportSetting" class="my-4 text-right">
            <button type="button" :disabled="loading" class="btn btn-primary" @click="exportToCSV">
                {{ $t('export_to_csv') }}
            </button>
        </div>

        <table class="table recordTable">
            <thead>
                <tr>
                    <slot name="head"></slot>
                </tr>
            </thead>
            <tbody>
                <slot v-if="tableData.length" name="body" :table-data="tableData"></slot>
                <tr v-else>
                    <td v-if="loading" colspan="100" class="text-center">
                        <Spinner />
                    </td>
                    <td v-else colspan="100" class="text-center">
                        {{ $t('no_data_available') }}
                    </td>
                </tr>
            </tbody>
        </table>

        <b-pagination
            v-if="rows"
            v-model="currentPage"
            class="mt-3 text-center"
            :total-rows="rows"
            :per-page="perPage"
            @page-click="handleClick"
        ></b-pagination>
    </div>
</template>

<script>
export default {
    name: 'STable',
    props: ['api', 'payload', 'exportSetting', 'dataKey', 'currPage'],
    data() {
        return {
            tableData: [],
            currentPage: 1,
            rows: 0,
            perPage: 50,
            loading: false,
        }
    },
    watch: {
        currentPage(newVal) {
            this.getData(newVal)
        },
    },
    beforeMount() {
        if (this.currPage) {
            this.currentPage = Number(this.currPage)
        }
    },
    mounted() {
        if (this.currPage) {
            this.getData(this.currPage)
        } else {
            this.getData()
        }
    },
    methods: {
        async getData(pageNum) {
            if (this.api) {
                this.loading = true
                const d = await this.$api(this.api, {
                    ...this.payload,
                    page: pageNum || this.currentPage,
                    pageNumber: pageNum || this.currentPage,
                })
                // console.log(d.data?.data?.data);
                this.loading = false

                const result = d.data?.data?.data || d.data?.data

                if (result) {
                    this.perPage = d.data?.data?.per_page
                    this.rows = d.data?.data?.total
                    if (!this.rows) {
                        this.rows = d.data?.page * this.perPage
                    }
                    this.tableData = result

                    this.$emit('getData', d.data)
                }
            }
        },
        async exportToCSV() {
            this.loading = true
            const d = await this.$api(this.api, { pageSize: 9999, ...this.payload })
            this.loading = false

            const listData = d.data?.content?.results || d.data?.content

            if (listData) {
                const exportSetting = this.exportSetting

                const eKey = Object.keys(exportSetting)
                const eValue = Object.values(exportSetting)
                const reformattedArr = []
                listData.forEach((v, k) => {
                    const reformatObj = {}
                    eValue.forEach((v1, k1) => {
                        reformatObj[eKey[k1]] = v[v1]
                    })
                    reformattedArr.push(reformatObj)
                })
                // console.log(reformattedArr)
                if (this.customHeader) {
                    this.$csvExport(reformattedArr, this.exportName || 'export', this.customHeader)
                } else {
                    this.$csvExport(reformattedArr, this.exportName || 'export')
                }
                return
            }
            // handle error here
            this.$toast(false, d.message)
        },
        handleClick() {
            // console.log("clicked");
            this.loading = true
            this.tableData = []
        },
    },
}
</script>
