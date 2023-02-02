import conn from '../dbConnection';
import { Tour } from '../entity/Tour';

const CategoryRepository = conn.getRepository(Tour).extend({
	// custom methods
	async findByName(place: string): Promise<Tour> {
		return await this.findOneBy({ place });
	},
	async findById(id: number): Promise<Tour> {
		return await this.findOneBy({ id });
	},
	async findAll(): Promise<Tour[]> {
		const tour = await this.createQueryBuilder('tour').getMany();
		return tour;
	},
	async saveCategory(tour: Tour): Promise<Tour> {
		return await this.save(tour);
	},
	async createCategory(tour: Tour): Promise<Tour> {
		return await this.create(tour);
	},
});

export default CategoryRepository;