import { IMultiplayerEntity } from './mpEntity';

export interface IPlayer {
    name: string;
    position: Vec3;
    entity: IMultiplayerEntity;
}