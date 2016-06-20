// Copyright (c) Alvin Pivowar 2016

const FACTORY_FUNCTION_SYMBOL = Symbol();

const injectForES6 = constructorOrArray =>  {
    if (!constructorOrArray) throw new Error("injectForES6: argument is required.");

    const addFactoryToInjectionArray = (inject, constructor) => {
        inject = inject || [];
        let length = inject.length;
        let currentFunction = (length && typeof(inject[length - 1]) === "function") ? inject[length - 1] : undefined;
        if (currentFunction) {
            if (!!Object.getOwnPropertySymbols(currentFunction).find(s => s === FACTORY_FUNCTION_SYMBOL))
                return inject;

            inject = inject.splice(-1, 1);
            inject.push(buildFactoryFunction(currentFunction));
            return inject;
        }

        if (!constructor) throw new Error("injectForES6: Unable to add factory function; constructor is unknown.");

        inject.push(buildFactoryFunction(constructor));
        return inject;
    };

    const buildFactoryFunction = constructor => {
        let factoryFn = (...args) => new constructor(...args);
        factoryFn[FACTORY_FUNCTION_SYMBOL] = true;
        return factoryFn;
    };

    // An injection array was passed in.
    if (Array.isArray(constructorOrArray))
        return addFactoryToInjectionArray(constructorOrArray);

    // A class was passed in.
    if (typeof(constructorOrArray) === "function") {
        let constructor = constructorOrArray;
        if (constructor.length && !constructor.$inject)
            throw new Error(`Unable to find $inject on ${constructor.name}.  Did you forget @ngInject?`);

        return addFactoryToInjectionArray(constructor.$inject, constructor);
    }

    throw new Error("injectForES6: Unrecognized argument; must be injection array or class.");
};

class base {
    constructor(...args) {
        console.log("in base");
    }

    static m(derivedClass) {
        console.log("in m: " + derivedClass.name);
    }
}

class derived extends base {
    constructor() {
        super(arguments);
    }

    static m() {
        base.m(this);
    }
}

class user extends derived {
    constructor() {
        super(arguments);
    }
}

user.m();

export {
    injectForES6
}