from app.models import db, Topic

# Adds seeder topics
def seed_topics():
    one = Topic(
      name="How To - Exercise",
      category_id=1,
      owner_id=1
    )
    two = Topic(
      name="How To - Meditate",
      category_id=1,
      owner_id=1
    )
    three = Topic(
      name="How To - Instantiate an Instance of a Class",
      category_id=2,
      owner_id=1
    )
    four = Topic(
      name="How To - Implement Selection Sort",
      category_id=2,
      owner_id=1
    )
    five = Topic(
      name="How To - Implement Bubble Sort",
      category_id=2,
      owner_id=1
    )
    six = Topic(
      name="How To - Pre-Order Binary Tree Traversal",
      category_id=3,
      owner_id=1
    )
    seven = Topic(
      name="How To - Breadth First Traversal",
      category_id=3,
      owner_id=1
    )
    eight = Topic(
      name="How To - Review Order for Accuracy",
      category_id=4,
      owner_id=2
    )
    nine = Topic(
      name="How To - Locate a Notary",
      category_id=4,
      owner_id=2
    )
    ten = Topic(
      name="How To - Mushroom-Miso Broth",
      category_id=5,
      owner_id=3
    )

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)
    db.session.add(eight)
    db.session.add(nine)
    db.session.add(ten)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_topics():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
