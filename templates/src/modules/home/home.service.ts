export default class HomeService {
  constructor() {}

  /**
   * Hello
   */
  public async Hello() {
    return {
      name: "<%= apiname %>",
      version: "1.0.0",
      description: "<%= description %>",
      message: "It's work very well. Go to /docs to see documentation",
    };
  }
}
