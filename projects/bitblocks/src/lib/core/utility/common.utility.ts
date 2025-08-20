function debonuce(callback: (...args: any) => void, delay: number) {
    let timeout: any;
    return (...args: any) => {
        clearTimeout(timeout);
        console.log(args);
        timeout = setTimeout(() => callback(...args), delay);
    }
}

export { debonuce };