import pytesseract
from PIL import Image
import re
from io import BytesIO
import imageio
import os
from openai import AzureOpenAI
from azure.core.credentials import AzureKeyCredential
from dotenv import load_dotenv

load_dotenv()

# Set up pytesseract path (adjust to your installation path)
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"  # For Windows
# For macOS or Linux, you may not need to set this path if tesseract is already in PATH

# Function to extract text from an image file (from request.files)
# Function to extract text from an image file (from request.files)
import imageio
import pytesseract
from PIL import Image
from io import BytesIO

def extract_text_from_image(file):
    try:
        print("Starting image extraction...")
        
        # First, try to read the file as an image using imageio
        print("Reading the image...")
        img = imageio.imread(file)
        print("Image read successfully.")
        
        # Ensure the image is not empty or corrupted
        if img is None:
            raise ValueError("Image could not be loaded. The file might be corrupted or not an image.")
        
        print("Attempting to extract text from image using pytesseract...")
        
        # Try extracting text from the image using pytesseract
        text = pytesseract.image_to_string(img)
        
        if not text:
            raise ValueError("No text could be extracted from the image.")
        
        print("Text extraction successful.")
        print(text)
        # Retrieve the endpoint and API key from environment variables
        key = os.environ['AZURE_OPENAI_KEY']
        endpoint = os.environ['AZURE_OPENAI_BASE']

        # Initialize the Azure OpenAI client
        client = AzureOpenAI(
            api_version="2024-02-15-preview",
            azure_endpoint=endpoint,
            api_key=key
        )

        # Example of making a request to the Azure OpenAI service
        # response = client.chat.completions.create(
        #     model="gpt-4.1-mini",
        #     messages=[
        #         {"role": "system", "content": "You are a helpful assistant."},
        #         {"role": "user", "content": "Hello, how can you assist me today?"}
        #     ]
        # )

        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {
                    "role": "user", 
                    "content": f"Extract only the Aadhaar number, name, year of birth, and gender from the following text, in that specific order, and print only the values separated by commas: {text}. In case you don't find any value you can generate random value"
                }
            ]
        )

        details = response.choices[0].message.content.strip().split(",")
    
        # Clean up any leading or trailing whitespace from each value
        details = tuple(detail.strip() for detail in details)

        # Return the details as a tuple
        return details

    except ValueError as ve:
        print(f"ValueError: {ve}")  # Handle specific errors like corrupted images or empty text
        return None

    except (OSError, IOError) as e:
        # Handle errors related to file opening or reading issues
        print(f"OSError / IOError: {e}")
        return None

    except pytesseract.TesseractError as e:
        # Handle Tesseract-specific errors (e.g., Tesseract issues)
        print(f"TesseractError: {e}")
        return None

    except Exception as e:
        # Catch any other unexpected errors
        print(f"Unexpected error: {e}")
        return None



# Function to extract Aadhaar number and Name
def extract_aadhaar_and_name(text):
    # Regex for Aadhaar number (12 digits)
    aadhaar_regex = r"\b\d{4} \d{4} \d{4}\b|\b\d{12}\b"

    # Regex for name (common patterns - you can customize based on how the names appear)
    name_regex = r"Name\s*[:\-]?\s*([A-Za-z\s]+)"

    aadhaar_numbers = re.findall(aadhaar_regex, text)
    names = re.findall(name_regex, text)

    # Return extracted data
    return names, aadhaar_numbers

# Function to process the uploaded image (from request.files)
def process_image(file):
    res = extract_text_from_image(file)  # Extract text from image
# Extract name and Aadhaar number

    if res:
        return {'aadhaar_number': res[0], 'name': res[1], 'year': res[2], 'gender': res[3]}
    else:
        return {'error': 'Could not extract name or Aadhaar number.'}
