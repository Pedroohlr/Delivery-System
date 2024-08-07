function retorno(db, req) {
    var dir = `arrays/${req}`
    function fbGet() {
        return new Promise((resolve, reject) => {
            try {
                db.ref(dir).once('value').then(async (x) => {
                    if (x.val() == null) return resolve(undefined)
                    let array; eval(`array = ${x.val().array}`); return resolve(array)
                })
            } catch (er) {
                reject(er)
                throw new TypeError('Firebase error.\n' + er)
            }
        })
    }

    function __get(varName, functionName) {
        return `db.ref(\`${dir}\`).once('value').then((x) => { ${varName} = x.val()? eval(x.val().array):undefined; ${functionName}() })`
    }
    function fbSet(res) {
        return new Promise((resolve, reject) => {
            let array_ = `${JSON.stringify(res)}`;
            if (res == null) array_ = null
            try {
                db.ref(dir).set({ array: array_ })
                resolve(200)
            } catch (er) {
                reject(er)
                throw new TypeError(`Firebase error.\n` + er)
            }
        })
    }

    function fbPush(res) {
        return new Promise(resolve => {
            fbGet().then(x => {
                const x2 = x ? x : []
                x2.push(res)
                fbSet(x2).then(y => {
                    resolve(y)
                })
            })
        })
    }
    function fbClone(res, forceSet) {
        return new Promise((resolve, reject) => {
            fbGet().then(x => {
                dir = 'arrays/' + res
                fbGet().then(x2 => {
                    if (x2 == undefined) fbSet(x).then(x => resolve(x));
                    else {
                        if (!forceSet) throw TypeError('The Clone method cannot be used with the SUBMISSION directory being with some saved content.')
                        else if (forceSet) fbSet(x).then(x => resolve(x))
                    }
                })
            })
        })
    }
    function fbReplace(res) {
        return new Promise(async (resolve) => {
            resolve(await fbClone(res, true))
        })
    }
    function fbRemove(res) {
        return new Promise((resolve, reject) => {
            fbGet().then(array2 => {
                let array = array2;
                if (array == undefined) return;
                else {
                    const arraySize = (array.length - 1);
                    if (arraySize < res) return;
                    else {
                        if (arraySize >= res) {
                            const newArray = [];
                            array.forEach(
                                function (item, index) {
                                    if (index !== res) newArray.push(item)
                                    if (index == arraySize) fbSet(newArray).then(x => resolve(x))
                                }
                            )
                        } else return;
                    }
                }
            })
        })
    }

    const obj = new Object();
    obj.fbGet = () => fbGet(); // V n° 1.0.0  -=/=- Manutenção na V n° 2.4.0
    obj.fbSet = (res) => fbSet(res) // V n° 1.0.0
    obj.fbPush = (res) => fbPush(res) // V n° 1.1.0
    obj.fbClone = (res) => fbClone(res) // V n° 2.1.0
    obj.fbReplace = (res) => fbReplace(res) // V n° 2.2.0
    obj.fbRemove = (res) => fbRemove(res) // V n° 2.3.1

    return obj;
}

/** 
 * ≫ ≫ ≫ feito por Lucas Felix Silveira
*/