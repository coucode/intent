from app.models import db, Step

# Adds seeder steps
def seed_steps():
    one = Step(topic_id=1,step_number=1,summary='Wear Workout Attire',description='Put on workout clothes and shoes')
    two = Step(topic_id=1,step_number=2,summary='Stretch',description='Stretch out the relevant muscles for your workout')
    three = Step(topic_id=1,step_number=3,summary='Exercise',description='Complete the exercise of your choice (Cardio, Weighlifting, Yoga, etc.)')
    four = Step(topic_id=1,step_number=4,summary='Stretch',description='Stretch out the relevant muscles after your workout')
    five = Step(topic_id=2,step_number=1,summary='Get Comfortable',description='Turn off electronics, pick calm music, wear comfortable clothing')
    six = Step(topic_id=2,step_number=2,summary='Decide Meditation Duration',description='Pick a time frame, anywhere from 5-20 minutes per day is recommended.')
    seven = Step(topic_id=2,step_number=3,summary='Do some light stretches',description='Light stretching helps prevent stiffness during your meditation session')
    eight = Step(topic_id=2,step_number=4,summary='Sit or lie down in a comfortable position')
    nine = Step(topic_id=2,step_number=5,summary='Close your eyes or keep them soft',description='This helps to prevent visual distractions')
    ten = Step(topic_id=2,step_number=6,summary='Focus on your breathing')
    eleven = Step(topic_id=2,step_number=7,summary='Do a Body Scan to release Tension',description='Focus on each individual body part in turn and conciously relax it. ')
    twelve = Step(topic_id=3,step_number=1,summary='Declare a variable using const',description='const variablename = ...')
    thirteen = Step(topic_id=3,step_number=2,summary='Use the new keyword',description='const variablename = new ...')
    fourteen = Step(topic_id=3,step_number=3,summary='Add the name of the class',description='const variablename = new Classname ...')
    fifteen = Step(topic_id=3,step_number=4,summary='Add parenthesis',description='const variablename = new Classname ( ) ')
    sixteen = Step(topic_id=3,step_number=5,summary='Fill in data that matches the constructor parameters',description="const variablename = new Classname ('example', 'example')")
    seventeen = Step(topic_id=4,step_number=1,summary='Divide the array into sorted and unsorted')
    eighteen = Step(topic_id=4,step_number=2,summary='Find and remove the smallest value from the unsorted')
    nineteen = Step(topic_id=4,step_number=3,summary='Add this value to the end of the sorted array')
    twenty = Step(topic_id=4,step_number=4,summary='Repeat this until unsorted is empty and sorted is full')
    twentyone = Step(topic_id=5,step_number=1,summary='Iterate through the array')
    twentytwo = Step(topic_id=5,step_number=2,summary='If the current value is greater than its neighbor to the right, swap those values')
    twentythree = Step(topic_id=5,step_number=3,summary='If you get to the end of the array and no swaps have occurred, return')
    twentyfour = Step(topic_id=5,step_number=4,summary='Otherwise, repeat from the beginning')
    twentyfive = Step(topic_id=6,step_number=1,summary='Print the current node value')
    twentysix = Step(topic_id=6,step_number=2,summary='Recursively calll the left subtree')
    twentyseven = Step(topic_id=6,step_number=3,summary='Recursively call the right subtree')
    twentyeight = Step(topic_id=7,step_number=1,summary='Put the starting node in a queue ')
    twentynine = Step(topic_id=7,step_number=2,summary='While the queue is not empty, repeat steps 3-4')
    thirty = Step(topic_id=7,step_number=3,summary='Dequeue a node and print it')
    thirtyone = Step(topic_id=7,step_number=4,summary="Put all of the node's children in the back of the queue")
    thirtytwo = Step(topic_id=8,step_number=1,summary='Check Special Instructions',description='Look for any indicators from the customer if the order requires an adjustment')
    thirtythree = Step(topic_id=8,step_number=2,summary='Check Signing Appointment Date',description='Signing Appointment cannot be placed for dates in the past')
    thirtyfour = Step(topic_id=8,step_number=3,summary='Check Signing Appointment Location',description='Location must be within the United States')
    thirtyfive = Step(topic_id=8,step_number=4,summary='Check Fees',description='Client fee must be higher than the Notary Fee')
    thirtysix = Step(topic_id=8,step_number=5,summary='Check Documents',description='Check to make sure that the correct loan packages are provided for the signing appointment (customer name, title company, etc.)')
    thirtyseven = Step(topic_id=9,step_number=1,summary='Review the order for accuracy',description='Special Instructions, Appointment Date, Location, Fees, Documents')
    thirtyeight = Step(topic_id=9,step_number=2,summary='Click the Search Button to review options',description='Take into consideration the location, signing appointment time, and any other extenuating circumstances (extreme weather, events, etc.)')
    thirtynine = Step(topic_id=9,step_number=3,summary='Adjust the contact radius as needed',description='If there is a large notary pool, keep the radius small (~5 miles), increase the radius as other factors allow')
    forty = Step(topic_id=9,step_number=4,summary='Filter for requested notary credentials',description='Be sure to indicate if NNA Certification, TIPIC License, etc are required.')
    fortyone = Step(topic_id=9,step_number=5,summary='Start the Search')
    fortytwo = Step(topic_id=10,step_number=1,summary='Gather Ingredients',description='2 strips (3x2-inch) kombu (dried kelp), 10 large shiitake mushrooms, stemmed, thinly sliced , 2 tablespoons mirin , 2 tablespoons soy sauce, 1/4 cup awase miso (or 2 tbsp. each shiro and aka miso), Small cluster of trimmed enoki mushrooms, torn apart, for garnish')
    fortythree = Step(topic_id=10,step_number=2,summary='Put Kombu, Shiitake, Mirin, Soy Sauce, Water into 6-8 quart pot',description='Do not put the Miso or Enoki Mushrooms')
    fortyfour = Step(topic_id=10,step_number=3,summary='Bring pot to boil, partly covered')
    fortyfive = Step(topic_id=10,step_number=4,summary='Reduce heat and simmer, 10 minutes, covered',description='This blends flavors and softens mushrooms')
    fortysix = Step(topic_id=10,step_number=5,summary='Put miso in medium heatproof bowl, whisk in 1 cup of hot broth to blend, then pour into pot')
    fortyseven = Step(topic_id=10,step_number=6,summary='Garnish with Enoki Mushrooms')

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
    db.session.add(twentyeight)
    db.session.add(twentynine)
    db.session.add(thirty)
    db.session.add(thirtyone)
    db.session.add(thirtytwo)
    db.session.add(thirtythree)
    db.session.add(thirtyfour)
    db.session.add(thirtyfive)
    db.session.add(thirtysix)
    db.session.add(thirtyseven)
    db.session.add(thirtyeight)
    db.session.add(thirtynine)
    db.session.add(forty)
    db.session.add(fortyone)            
    db.session.add(fortytwo)
    db.session.add(fortythree)
    db.session.add(fortyfour)
    db.session.add(fortyfive)
    db.session.add(fortysix)
    db.session.add(fortyseven)
       
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_steps():
    db.session.execute('TRUNCATE steps RESTART IDENTITY CASCADE;')
    db.session.commit()
