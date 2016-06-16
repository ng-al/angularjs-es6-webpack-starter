// Copyright (c) Alvin Pivowar 2016

const injectForES6 = constructorOrArray =>  {
    if (!constructorOrArray) throw new Error("injectForES6: argument is required.");

    // An injection array was passed in.
    if (Array.isArray(constructorOrArray)) {
        let inject = constructorOrArray;
        let length = inject.length;
        const constructor = inject[length - 1];
        if (!constructor.name)
            return inject;

        inject.splice(-1, 1);
        inject.push((...args) => new constructor(...args));
        return inject;
    }

    // A class was passed in.
    if (typeof(constructorOrArray) === "function") {
        let constructor = constructorOrArray;
        if (constructor.length && !constructor.$inject)
            throw new Error(`Unable to find $inject on ${constructor.name}.  Did you forget @ngInject?`);

        const inject = constructor.$inject || [];
        let length = inject.length;
        if (!length || typeof(inject[length - 1]) !== "function")
            inject.push((...args) => new constructor(...args));

        return inject;
    }

    throw new Error("injectForES6: Unrecognized argument; must be injection array or class.");
};

export {
    injectForES6
}