export type loremPicsum = {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};
export class Helpers {
  static async getProducts(url: string) {
    const products = await fetch(url)
      .then(async (res) => {
        const isJson = res.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson ? await res.json() : null;
        if (res.ok || res.status === 200) {
          return data;
        }
        if (!res.ok) {
          const error = (data && data.message) || res.status;
          return Promise.reject(error);
        }
      })
      .catch(() => {
        return [];
      });
    return products;
  }
  static async formatProducts() {
    const insta = (await this.getProducts("https://picsum.photos/v2/list")
      .then((item) => item)
      .catch(() => [])) as loremPicsum[];
    if (!insta) {
      return [];
    }
    return insta.map((prod) => prod.download_url);
  }
}
