import { EntityRepository, Repository } from "typeorm";
import { UserDto } from "../dto/user.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    
    private newUser: User;

    public async findById(id: string): Promise<User> {
        return await this.findOne({id});
    }

    public async saveRepository(id: string, repository: string): Promise<User> {
        this.newUser = await this.findById(id);
        this.newUser.repository = repository;
        this.save(this.newUser);
        return this.newUser;
    }

    public async saveUser(userDto: UserDto): Promise<User> {
        this.newUser = this.create(userDto);
        this.save(this.newUser);
        return this.newUser;
    }

}