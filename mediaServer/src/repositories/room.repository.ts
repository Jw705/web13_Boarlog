import { RoomInfoDto } from '../dto/room-info.dto';
import { redis } from '../config/redis.config';
import { ROOM_INFO_KEY_PREFIX } from '../constants/redis-key.constant';
import { ICanvasData } from '../types/canvas-data.interface';

const findRoomInfoById = (roomId: string) => {
  return redis.hgetall(ROOM_INFO_KEY_PREFIX + roomId);
};

const saveRoomInfo = async (roomId: string, roomInfo: RoomInfoDto) => {
  await redis.hset(ROOM_INFO_KEY_PREFIX + roomId, roomInfo);
};

const updateWhiteboardData = async (roomId: string, whiteboardData: ICanvasData) => {
  await redis.hset(ROOM_INFO_KEY_PREFIX + roomId, { currentWhiteboardData: JSON.stringify(whiteboardData) });
};

const deleteRoomInfoById = async (roomId: string) => {
  await redis.del(ROOM_INFO_KEY_PREFIX + roomId);
};

export { findRoomInfoById, saveRoomInfo, updateWhiteboardData, deleteRoomInfoById };
