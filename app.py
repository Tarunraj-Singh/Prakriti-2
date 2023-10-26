# from flask import Flask, render_template, request, jsonify
# import pickle
# import numpy as np

# model = pickle.load(open('model.pkl', 'rb'))

# app = Flask(__name__)

# # Define a new list of questions for the Python side

# @app.route('/')
# def man():
#     return render_template('chatbot.html')

# @app.route('/process_user_input', methods=['POST'])
# def process_user_input():
#     global user_responses
#     user_input = request.json['user_input']
#     user_responses.append(user_input)
#     # user_input = request.form.get('user_input')
    
    
#     model = pickle.load(open('model.pkl', 'rb'))
#     # Add your logic here to store and process user responses
# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

conversation_history = []  # To store user inputs

@app.route('/')
def man():
    return render_template('chatbot.html')

@app.route("/process_user_input", methods=['POST'])
def process_user_input():
    user_input = request.json.get('userInput')
    
    # Append the user input to the conversation history
    conversation_history.append(user_input)
    
    # Process the user input and generate a bot response
    # You can use your machine learning model here
    
    bot_response = "This is a bot response. Replace this with your bot logic."
    
    # Access and print the userChoices sent from JavaScript
    user_choices = request.json.get('userChoices')
    # user_choices.pop(0)
    user_choices = np.array(user_choices).reshape(1, -1)
    print("User Choices:", user_choices)
    user_choices = np.array(user_choices)
    # user_choices=np.array(["Cracked","Skin","Dry","poor","Restless","rough","rough","rough","rough","rough","dry","very light","Quick,light movements","poor","NA"])
    model = pickle.load(open('model.pkl', 'rb'))
    

    # Make predictions using your model
    predictions = model.predict(user_choices)
    print([predictions])
    return jsonify({'botResponse': bot_response})
if __name__ == '__main__':
    app.run(debug=True)
