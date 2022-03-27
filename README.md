# TrainTrax

## Tech Stack

### Front End

- React
- React Hooks
- axios

### Back End

- node
- express server
- mongo db

### Testing

- Jest

## To Do

- Implement Main Menu Component

### Program Creation

- User can make a Program
- User can add a Routine to a Program

### Routine Creation

- User can make a Routine
- User can define a Set
- User can add Set details
- User can replicate a Set
- User can edit a Set
- User can delete a Set

### Active Program Selection

- User can set active program

### Session Engagement

- User can select routine
- User can start session
- User can select Exercise
- User can select weight
- User can complete a set
- User can select failure
- User can end session

### Progress View

- User can view exercise progress chart (Date x weight)

## Domain

### User

- id
- Name
- Height
- Weight
- Body Fat %
- Programs[]
- Active Program
- Sessions[]
- Sex
- Body Type
- BMI
- BMR
- TDEE

### Program

- id
- Routines[]
- Period
- Length

### Routine

- id
- Sets[]
- Exercise
- Equipment
- Amount
- Unit
- Rest Time
- Modifier (Drop Set, Rest Pause, Failure)

### Session

- id
- Start Time
- End Time
- Routine
- Set Result[]
    - Exercise
    - Weight
    - Amount

### Exercise

- id
- Muscle Group
    - Primary
    - Secondary
    - Tertiary
- Movement Type
    - Push
    - Pull
    - Upper Body
    - Lower Body
    - Isometric
- Equipment

### Muscle Group

- Neck
    - Sternocleidomastoid
        - Splenius
- Shoulders
    - Deltoid
        - Anterior
        - Lateral
        - Posterior
    - Supraspinatus
- Upper Arms
    - Triceps Brachii
    - Biceps Brachii
    - Brachialis
- Forearms
    - Brachioradialis
    - Wrist
        - Flexors
        - Extensors
    - Pronators
    - Supinators
- Back
    - Latissimus Dorsi & Teres Major
    - Trapezius
        - Upper
        - Middle
        - Lower
    - Levator Scapulae
    - Rhomboids
    - Infraspinatus & Teres Minor
    - Subscapularis
- Chest
    - Pectoralis Major
        - Sternal
        - Clavicular
    - Pectoralis Minor
    - Serratus Anterior
- Waist
    - Rectus Abdominis
    - Transverse Abdominis
    - Obliques
    - Quadratus Lumborum
    - Erector Spinae
- Hips
    - Gluteus Maximus
    - Abductors
    - Flexors
    - Deep External Rotators
- Thighs
    - Quadriceps
    - Hamstrings
    - Hip Adductors
- Calves
    - Gastrocnemius
    - Soleus
    - Tibialis Anterior
    - Popliteus

### Equipment

- Dumbbells
- Barbell
- Kettle bell
- Bench
- Resistance Bands
- Balance Ball
- Medicine Ball
- Ab Roller
- Yoga Mat
- Yoga Block
- Smith Machine
- Squat Rack
- Jump Rope
- TRX Bands
- Pull up bar
