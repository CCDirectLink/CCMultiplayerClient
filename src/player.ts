import { IMultiplayerEntity } from './mpEntity';

export interface IPlayer {
    name: string;
    position: ig.Vector3;
    entity: IMultiplayerEntity;
}