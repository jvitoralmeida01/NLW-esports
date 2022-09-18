export default interface GameResponse {
    id          : string,
    title       : string,
    bannerUrl   : string,
    _count      : {
        ads     : number
    }
  }