import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    id: string;

    @Column({ nullable : true })
    profileImage: string;

    @Column()
    name: string;

    @Column({ nullable : true })
    description: string;

    @Column({ nullable : true })
    location: string;

    @Column({ nullable : true })
    repository: string;

}