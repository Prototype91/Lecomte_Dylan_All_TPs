const stringPromise = (string) => {
    return new Promise((resolve, failure) => {
        if (string.length > 20) {
            failure('Chaîne de caractère trop longue !');
        };
        resolve(true);
    });
};

const intPromise = (firstInt, secondInt) => {
    return new Promise((resolve, failure) => {
        if (firstInt > secondInt) {
            const diff = firstInt - secondInt;
            resolve(diff);
        };
        failure('echec');
    });
};

const datePromise = (formatDate) => {
    return new Promise((resolve, failure) => {
        const date = new Date(formatDate)
        const month_diff = Date.now() - date.getTime();
        const age_diff = new Date(month_diff);
        const year = age_diff.getUTCFullYear();
        const age = Math.abs(year - 1970);

        if (age > 18) {
            resolve(true);
        };

        failure('Tu es mineur !');
    });
};

async function stringTryCatchPromiseExecute(string) {
    try {
        const firstPromise = await stringPromise(string);
        console.log(firstPromise);
    } catch (error) {
        console.log(error);
    };
};

function stringThenCatchPromiseExecute(string) {
    stringPromise(string)
        .then(res => console.log(res))
        .catch(error => console.error(error));
};

async function intTryCatchPromiseExecute(firstInt, secondInt) {
    try {
        const secondPromise = await intPromise(firstInt, secondInt);
        console.log(secondPromise);
    } catch (error) {
        console.log(error);
    };
};

function intThenCatchPromiseExecute(firstInt, secondInt) {
    intPromise(firstInt, secondInt)
        .then(res => console.log(res))
        .catch(error => console.error(error));
};

async function dateTryCatchPromiseExecute(formatDate) {
    try {
        const thirdPromise = await datePromise(formatDate);
        console.log(thirdPromise);
    } catch (error) {
        console.log(error);
    };
};

function dateThenCatchPromiseExecute(formatDate) {
    datePromise(formatDate)
        .then(res => console.log(res))
        .catch(error => console.error(error));
};

stringTryCatchPromiseExecute('Bonjour');
intTryCatchPromiseExecute(50, 20);
dateTryCatchPromiseExecute('09/06/1999');

stringThenCatchPromiseExecute('Bonjour');
intThenCatchPromiseExecute(50, 20);
dateThenCatchPromiseExecute('09/06/1999');