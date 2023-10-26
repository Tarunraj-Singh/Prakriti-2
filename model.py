import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import pickle

# Load the csv file
df = pd.read_csv("Prakriti.csv")

# Select independent and dependent variable
X = df[[
    "Visual_features", "Tactile_features", "Joints", "Eyes", "Nails", "Teeth", "Mouth", 
    "Palm_and_Sole", "Hair", "Voice_assessment", "Sleep_pattern", "Movement_and_Gait", 
    "Diet_and_Lifestyle", "Excretory_products"
]]
y = df["Prakriti"]

# Split the dataset into train and test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create separate transformers for numerical data
numeric_features = [
    "Visual_features", "Tactile_features", "Joints", "Eyes", "Nails", "Teeth", "Mouth", 
    "Palm_and_Sole", "Hair", "Voice_assessment", "Sleep_pattern", "Movement_and_Gait", 
    "Diet_and_Lifestyle", "Excretory_products"
]

numeric_transformer = Pipeline(steps=[
    ('scaler', StandardScaler())
])

# Combine transformers using ColumnTransformer (only numeric features)
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features)
    ])

# Create a pipeline with preprocessing and the classifier
pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                           ('classifier', RandomForestClassifier())])

# Fit the model
pipeline.fit(X_train, y_train)

# Make a pickle file of our model
with open("model.pkl", "wb") as model_pkl:
    pickle.dump(pipeline, model_pkl)
