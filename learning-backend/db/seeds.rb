# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Age.destroy_all
Subject.destroy_all
Question.destroy_all


Age.create(ages: "2-3" )
Age.create(ages: "3-4" )
Age.create(ages: "4-5" )

Subject.create(age_id: Age.first.id, subject_name: "colors")
Subject.create(age_id: Age.first.id, subject_name: "numbers")
Subject.create(age_id: Age.second.id, subject_name: "numbers")

Question.create(subject_id: Subject.first.id, question: "What is this color?", image: "https://i.pinimg.com/564x/6b/81/52/6b815209f2b5f67eb1a693e32a64575a.jpg", answer: "Red")
Question.create(subject_id: Subject.first.id, question: "What is this color?", image: "https://i.pinimg.com/236x/c2/44/35/c244353ade60f092cb471489d809f164.jpg", answer: "Green")
Question.create(subject_id: Subject.first.id, question: "What is this color?", image: "https://i.pinimg.com/236x/4e/ef/72/4eef721cb9780d2f5f508f071aeecb18.jpg", answer: "Yellow")
Question.create(subject_id: Subject.first.id, question: "What is this color?", image: "https://i.pinimg.com/236x/21/30/b3/2130b314b1c4e2f1bf71ca46269b1ccc.jpg", answer: "Blue")
Question.create(subject_id: Subject.second.id, question: "2 + 2", image: "", answer: "4")
