export interface Notification {
  actions?: Actions[] | null;
  description?: string | null;
  from: From;
  message: string;
  read: boolean;
  attachments?: Attachments[] | null;
}
export interface Actions {
  config: Config;
  control: string;
}
export interface Config {
  label?: string | null;
}
export interface From {
  name: string;
}
export interface Attachments {
  name: string;
  url: string;
}

export interface ToastAction {
  toast: any;
  id: number;
  action: string
}