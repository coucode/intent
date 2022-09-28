from app.models import db, Score

# Adds scores seeder data
def seed_scores():
    one =Score(user_id=1,step_id=1,score=5)
    two =Score(user_id=1,step_id=2,score=5)
    three=Score(user_id=1,step_id=3,score=3)
    four=Score(user_id=1,step_id=4,score=1)
    five=Score(user_id=1,step_id=5,score=1)
    six=Score(user_id=1,step_id=6,score=2)
    seven=Score(user_id=1,step_id=7,score=3)
    eight=Score(user_id=1,step_id=8,score=4)
    nine=Score(user_id=1,step_id=9,score=5)
    ten=Score(user_id=1,step_id=10,score=1)
    eleven=Score(user_id=1,step_id=11)
    twelve=Score(user_id=1,step_id=12,score=2)
    thirteen=Score(user_id=1,step_id=13,score=3)
    fourteen=Score(user_id=1,step_id=14,score=4)
    fifteen=Score(user_id=1,step_id=15,score=5)
    sixteen=Score(user_id=1,step_id=16,score=1)
    seventeen=Score(user_id=2,step_id=17,score=5)
    eighteen=Score(user_id=2,step_id=18,score=2)
    nineteen=Score(user_id=2,step_id=19,score=3)
    twenty=Score(user_id=2,step_id=20,score=4)
    twentyone=Score(user_id=2,step_id=21,score=1)
    twentytwo=Score(user_id=2,step_id=22,score=5)
    twentythree=Score(user_id=2,step_id=23,score=2)
    twentyfour=Score(user_id=2,step_id=24,score=3)
    twentyfive=Score(user_id=2,step_id=25,score=2)
    twentysix=Score(user_id=2,step_id=26,score=3)
    twentyseven=Score(user_id=2,step_id=27,score=5)

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
    db.session.add(eleven)
    db.session.add(twelve)
    db.session.add(thirteen)
    db.session.add(fourteen)
    db.session.add(fifteen)
    db.session.add(sixteen)
    db.session.add(seventeen)    
    db.session.add(eighteen)
    db.session.add(nineteen)
    db.session.add(twenty)
    db.session.add(twentyone)
    db.session.add(twentytwo)
    db.session.add(twentythree)
    db.session.add(twentyfour)
    db.session.add(twentyfive)            
    db.session.add(twentysix)
    db.session.add(twentyseven)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_scores():
    db.session.execute('TRUNCATE scores RESTART IDENTITY CASCADE;')
    db.session.commit()
