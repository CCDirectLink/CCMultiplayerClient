class Multiplayer {
    public config: MultiplayerConfig;

    private connection!: IConnection;

    constructor(config?: MultiplayerConfig) {
        if (config) {
            this.config = config;
        } else {
            this.config = new MultiplayerConfig();
        }
    }

    public async load(): Promise<void> {
        await this.config.load();
        this.connection = this.config.getConnection(this);
    }
}