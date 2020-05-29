import v1RouteControllers from './v1/_index.ts'

const CONTROLLERS = {
    v1: v1RouteControllers
}

export default {
    register(router : any, base: string) {
        Object.keys(CONTROLLERS).forEach(version => {
            Array.from((CONTROLLERS as any)[version]).forEach(controller => {
                Object.keys((controller as any)).forEach(method => {
                    Object.keys((controller as any)[method]).forEach(route => {
                        router[method](`/${base}/${version}/${route}`, (controller as any)[method][route])
                    })
                })
            })
        });
    }
}