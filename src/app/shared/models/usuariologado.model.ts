
export class usuarioLogado{
    id!: number;
    id_empresa!: number;
    username!: string;
    claims!: claims[]
}

export class claims {
    value!: string;
    type!: string;
}
