export class MockApi {
   static async get() {
    return import('./mock/servicesData').then(({ services }) => {
      return services
    })
  }
}