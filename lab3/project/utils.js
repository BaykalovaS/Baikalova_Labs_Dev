const cWaitingEnd = 'Ожидание завершено';
const cTimeoutError = 'Ошибка таймаута';

const simulateLoading = async (delay) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(cWaitingEnd); }, delay);
    });
    return promise;
}

const withTimeout = async (promise, timeoutMs) => {
    const result = await Promise.race([
        promise,
        simulateLoading(timeoutMs)
    ]);
    if (result = cWaitingEnd) {
        return new Error(cTimeoutError);
    } 
    return result;

}

const retryOperation = async (operation, retries) => {
    let currentRetry = 0;
    let delay = 500;
    do {
        currentRetry++;
        const result = await operation;
        if (result.Error == undefined) {
            break;
        }

        delay *= 2; // экспоненциальное ожидание
        await simulateLoading(delay); 
    } while(currentRetry <= retries);
}