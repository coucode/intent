from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        email='demo@user.io', 
        password='pass',
        first_name='Demo',
        last_name='User')
    cecilia = User(
        email='demo1@user.io', 
        password='pass',
        first_name='Cecilia',
        last_name='O')
    melissa = User(
        email='demo2@user.io', 
        password='pass',
        first_name='Melissa',
        last_name='King')

    db.session.add(demo)
    db.session.add(cecilia)
    db.session.add(melissa)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
