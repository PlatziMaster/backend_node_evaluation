import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class Category extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  image: string;
}

const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

CategorySchema.index({ name: 1 });

export { Category, CategorySchema };
