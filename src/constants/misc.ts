export enum NodeEnvs {
  Dev = 'development',
  Test = 'test',
  Production = 'production'
}

export const defaults = {
  pageSize: 20,
  page: 1,
  sort: "desc"
}

export const options = {
  sort: ["asc", "desc"]
}

export const pagination = (page:number, pageSize:number) => (page - 1) * pageSize