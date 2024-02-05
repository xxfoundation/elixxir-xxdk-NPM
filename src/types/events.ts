export enum ChannelEvents {
  NICKNAME_UPDATE = 1000,
  NOTIFICATION_UPDATE = 2000,
  MESSAGE_RECEIVED = 3000,
  USER_MUTED = 4000,
  MESSAGE_DELETED = 5000,
  ADMIN_KEY_UPDATE = 6000,
  DM_TOKEN_UPDATE = 7000,
  CHANNEL_UPDATE = 8000
}

export type ChannelEventHandler = (eventType: ChannelEvents, data: unknown) => void;

export enum DMEvents {
  DM_NOTIFICATION_UPDATE = 1000,
  DM_BLOCKED_USER = 2000,
  DM_MESSAGE_RECEIVED = 3000
}


export type DMEventHandler = (eventType: DMEvents, data: unknown) => void;
