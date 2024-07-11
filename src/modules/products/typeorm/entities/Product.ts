import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string = '';

    @Column()
    name: string  = '';

    @Column('decimal')
    price: number = 0;

    @Column('int')
    quantity: number = 0;

    @CreateDateColumn()
    created_at: Date = new Date;

    @UpdateDateColumn()
    updated_at: Date = new Date;
}

export default Product;