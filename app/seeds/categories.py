from app.models import db, Category

# Adds seeder categories
def seed_categories():
    self_care = Category(
      name="Self Care",
      headline="Learn about the basics of self-care",
      description="Modern day self care guides! ",
      purpose="Wellness",
      private= True,
      icon="/static/images/categories/spa.svg",
      owner_id=1
    )
    js = Category(
      name="JavaScript",
      headline="Commit JavaScript processes to memory!",
      description="Become more efficient with remembering how to do stuff in JavaScript!",
      purpose="Coding",
      private= False,
      icon="/static/images/categories/js.svg",
      owner_id=1
    )
    ds = Category(
      name="Data Structures and Algorithms",
      headline="Refresh your mind on DS&A!",
      description="Let's be honest...everyone could use a refresher on this topic. Start learning now!",
      purpose="Coding",
      private= False,
      icon="/static/images/categories/gears.svg",
      owner_id=1
    )
    orders = Category(
      name="New Orders",
      headline="Improve operational efficiency with this set of topics.",
      private= False,
      icon="/static/images/categories/house.svg",
      owner_id=2
    )
    recipes = Category(
      name="Recipes",
      headline="Memorize the basic recipes used in every day cooking and reduce your time spent reading recipes over and over again!",
      description="Learn some of famous chef Melissa King's staple recipes",
      purpose="Cooking",
      private= False,
      icon="/static/images/categories/utensils.svg",
      owner_id=3
    )

    db.session.add(self_care)
    db.session.add(js)
    db.session.add(ds)
    db.session.add(orders)
    db.session.add(recipes)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
