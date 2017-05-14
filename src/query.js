import Statement from './statement';

export function where(condition, chain) {
    return new Statement('where', condition, chain)
}

export default {
    where
}