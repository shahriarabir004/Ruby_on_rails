json.extract! course, :id, :name, :prerequisite, :category, :location, :created, :created_at, :updated_at
json.url course_url(course, format: :json)
