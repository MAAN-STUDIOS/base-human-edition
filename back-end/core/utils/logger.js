class Logger {
    constructor(module) {
        this.module = module
        this.ID = 0
    }

    debug(message) {
        this.inner_log('DEBUG', message);
    }

    info(message) {
        this.inner_log('INFO ', message);
    }

    warn(message) {
        this.inner_log('WARN ', message);
    }

    error(message) {
        this.inner_log('ERROR', message);
    }

    inner_log(level, msg) {
        if (process.env.NODE_ENV !== 'developer') return;
        if (typeof msg === 'object') {
            msg = JSON.stringify(msg, null, 2);
        }

        console.log(`[ ${this.now()} ] [ ${this.module}:${String(this.ID++).padStart(5, '0')} ] [ ${level} ] - ${msg}`);
    }

    now() {
        const date = new Date();
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const hh = String(date.getHours()).padStart(2, '0');
        const MM = String(date.getMinutes()).padStart(2, '0');
        const ss = String(date.getSeconds()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd} ${hh}:${MM}:${ss}`;
    }
}

let modules = {}
export default function get_logger(module_name) {
    if (!modules[module_name]) {
        modules[module_name] = 0;
    } else {
        modules[`${module_name} ${++modules[module_name]}`] = 0;
    }

    return new Logger(module_name);
}
