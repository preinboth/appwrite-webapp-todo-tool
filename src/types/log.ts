export type ILog = {
  date: Date;
  status: number;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
  path: string;
  response: string;
};
export type ILogResponse = {
  logs: ILog[];
  total: number;
};
