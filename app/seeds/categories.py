from app.models import db, Category

# Adds a demo user, you can add other users here if you want
def seed_categories():
    self = Category(
      name="",
      headline="",
      description="",
      purpose="",
      private= ,
      icon="",
      owner_id=

    )

    db.session.add(one)
    db.session.add(two)
    db.session.add()

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
