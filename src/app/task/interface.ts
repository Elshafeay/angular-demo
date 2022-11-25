export interface ITask {
  id: number,
  name: string,
  createdAt: Date,
  isFinished: boolean
}

export interface IProduct {
  id: number,
  title: string,
  description: string,
  price: number,
  thumbnail: string,
}