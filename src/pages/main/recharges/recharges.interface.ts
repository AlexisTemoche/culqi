export interface ProvidersListResponse {
  status: string
  responseMessage: string
  data: {
    companies: Company[]
  }
}

export interface Company {
  company: number
  _id: string
  image: string
}
