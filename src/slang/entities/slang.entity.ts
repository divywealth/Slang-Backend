import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"
@Entity()
export class Slang {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    slang: string;

    @Column({nullable: false})
    meaning: string
}
