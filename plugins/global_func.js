export default function ({ i18n }, inject) {
    const fdl = (d) => {
        // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        var today  = new Date(d);

        // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
        return today.toLocaleDateString("en-UK", options); // Saturday, September 17, 2016
    }

    const fdt = (d) => {
        if(!d) {
            return '-'
        }
        // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        var today  = new Date(d);

        // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
        return today.toLocaleString("en-US", options); // Saturday, September 17, 2016
    }

    /*
        To use this function just pass true/false for success or danger variant
        Default title = Notification
        message will be function pass in

        exp: for success toast => this.$toast(true, "Hello world")
             for failed toast => this.$toast(false, "Bye World")
    */
    const toast = (success, message) => {
        let variant = success?'success':'danger'

        $nuxt.$bvToast.toast(i18n.t(message), {
            title: i18n.t("noti"),
            variant: variant,
            solid: true,
            autoHideDelay: 3000,
            toaster: "b-toaster-bottom-right",
        })
    }

    const shortenAdd = (txt) => {
        if(txt) {
            let formatted = txt.substr(0,4)+'....'+txt.substr(-4,4)
    
            return formatted
        }else{
            return '-'
        }
    }

    
    const copyToClipboard = async(text) => {
        try {
           await navigator.clipboard.writeText(text);
           $nuxt.$toast(true, $nuxt.$t('copied_to_clipboard'))
        } catch (err) {
           $nuxt.$toast(false, err)
        }
    }
    const numberThousand = (num, dec = 2, round = false) => {
        if(!num || isNaN(num)) {
            return '0.00'
        }

        if(round) {
            num = parseFloat(num);
            num.toFixed(dec);
        }
        num += '';
        var splitNumber = num.split('.');
        var firstNumber = splitNumber[0];
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(firstNumber)) {
            firstNumber = firstNumber.replace(rgx, '$1' + ',' + '$2');
        }
        if (splitNumber[1]) {
            var secondNumber = splitNumber[1];
            if(!dec && dec!=0) {
                dec = secondNumber.length;
            }
        } else {
            var secondNumber = "00000000";
        }
        if(!dec) {
            dec=0;
        }
        var splitSecondNumber = (""+secondNumber).split("");
        if (splitSecondNumber.length < dec) {
            for (var i = splitNumber[1].length; i < dec; i++) {
                splitSecondNumber.push("0");
            }
        }
        var decimalNumber = [];
        splitSecondNumber.forEach((v,k) => {
            if (k < dec) {
                var pushTheNumber = v;
                decimalNumber.push(pushTheNumber);
            }
        });

        var joinSecondNumber = decimalNumber.join("");
        if (dec == 0) {
            var actualNumber = firstNumber;
        } else {
            var actualNumber = firstNumber + "." + joinSecondNumber;
        }


        return actualNumber;
    }

    const csvExport = (arrayOfJson, filename, customHeader) => {
        // convert JSON to CSV
        const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
        const header = Object.keys(arrayOfJson[0])
        let csv = arrayOfJson.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
        if(customHeader) {
            if(customHeader.length) {
                if(typeof customHeader[0] == 'string') {
                    csv.unshift(customHeader.join(','))
                }else if(typeof customHeader[0] == 'object') {
                    customHeader.slice().reverse().map((v,k) => {
                        csv.unshift(v.join(','))
                    })
                }
            }
        }else{
            csv.unshift(header.join(','))
        }
        csv = csv.join('\r\n')
        // console.log(csv)
      
        // Create link and download
        var link = document.createElement('a');
        link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv));
        link.setAttribute('download', (filename || 'export')+'.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    inject('fdl', fdl)
    inject('fdt', fdt)
    inject('toast', toast)
    inject('shortenAdd', shortenAdd)
    inject('copyToClipboard', copyToClipboard)
    inject('numberThousand', numberThousand)
    inject('csvExport', csvExport)
};