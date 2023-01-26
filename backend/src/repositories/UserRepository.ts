// definition of the User repository
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { User } from '../entity/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    // custom methods
    findByEmail(email: string) {
        return this.findOneBy({ email });
    }
    findById(id: number) {
        return this.findOneBy({ id });
    }
    async findAll(): Promise<User[]> {
        const users = await this.createQueryBuilder('user')
            .getMany();
        return users;
    }
    async findByCredentials(email: string, password: string): Promise<User> {
        // getting the user by email and password
        const user = await this.createQueryBuilder('user')
            .where('user.email = :email', { email })
            .getOneOrFail();
        // if the user exists and the password is correct
        if (user && user.checkPassword(password)) {
            return user;
        }
        throw new Error('User or password incorrect');
    }
    async saveUser(user: User): Promise<User> {
        return await this.save(user);
    }
    async createUser(user: User): Promise<User> {
        return await this.create(user);
    }
    async updateUser(user: User): Promise<User> {
        return await this.save(user);
    }
    async deleteUser(user: User): Promise<User> {
        return await this.remove(user);
    }
}

export const getUserRepository = () => {
    return getCustomRepository(UserRepository);
}
