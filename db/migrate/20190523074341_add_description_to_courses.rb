class AddDescriptionToCourses < ActiveRecord::Migration[5.1]
  def change
    add_column :courses, :description, :varchar
  end
end
