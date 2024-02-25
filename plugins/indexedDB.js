// plugins/indexedDB.js

import { openDB } from 'idb'

const dbName = 'myDatabase'
const storeName = 'categories'

let dbPromise = null

if (process.client) {
    dbPromise = openDB(dbName, 1, {
        upgrade(db) {
            const store = db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true })
            store.createIndex('name', 'name', { unique: false })
            store.createIndex('value', 'value', { unique: false })
        },
    })
}

export default async ({ app }, inject) => {
    inject('indexedDB', {
        async saveCategory(category) {
            if (process.client) {
                try {
                    const db = await dbPromise
                    const tx = db.transaction(storeName, 'readwrite')
                    const store = tx.objectStore(storeName)

                    if (Array.isArray(category)) {
                        // If category is an array, add each item individually
                        for (const item of category) {
                            await store.add(item)
                        }
                    } else {
                        // If category is a single item, add it directly
                        await store.add(category)
                    }

                    await tx.done
                } catch (error) {
                    console.error('Error saving category:', error)
                    // Handle the error (e.g., show a user-friendly message)
                }
            } else {
                console.warn('IndexedDB is not supported on the server side.')
            }
        },

        async getAllCategories() {
            if (process.client) {
                try {
                    const db = await dbPromise
                    const tx = db.transaction(storeName, 'readonly')
                    const store = tx.objectStore(storeName)
                    return store.getAll()
                } catch (error) {
                    console.error('Error getting all categories:', error)
                    // Handle the error (e.g., show a user-friendly message)
                    return []
                }
            } else {
                console.warn('IndexedDB is not supported on the server side.')
                return []
            }
        },
        async deleteAllCategories() {
            if (process.client) {
                try {
                    const db = await dbPromise
                    const tx = db.transaction(storeName, 'readwrite')
                    const store = tx.objectStore(storeName)

                    // Clear all items from the store
                    await store.clear()

                    await tx.done
                } catch (error) {
                    console.error('Error deleting all categories:', error)
                    // Handle the error (e.g., show a user-friendly message)
                }
            } else {
                console.warn('IndexedDB is not supported on the server side.')
            }
        },
    })
}
