export default function createEvent() {
    let subscribers = [];

    function subscribe(func) {
        subscribers.push(func);
    }

    function emit() {
        for (let subscriber of subscribers) {
            subscriber();
        }
    }

    return {subscribe, emit};
}