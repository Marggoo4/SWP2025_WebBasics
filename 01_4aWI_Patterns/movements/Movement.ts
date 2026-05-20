export interface Movement {
    update(deltaTime: number): void;
    getX(): number;
    getY(): number;
}
