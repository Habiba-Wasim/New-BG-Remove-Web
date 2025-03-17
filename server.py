# from fastapi import FastAPI, File, UploadFile
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.responses import Response
# from rembg import remove
# from PIL import Image
# import io

# app = FastAPI()

# # ✅ CORS Middleware - Next.js frontend ko allow karega
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Agar specific domain chahiye toh "http://localhost:3000" likho
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.get("/")
# def home():
#     return {"message": "FastAPI is running successfully!"}

# @app.post("/remove-bg/")
# async def remove_bg(file: UploadFile = File(...)):
#     try:
#         # Image ko read karo
#         image = Image.open(io.BytesIO(await file.read()))
        
#         # Background remove karo
#         output_image = remove(image)

#         # Image ko bytes me convert karo
#         img_byte_arr = io.BytesIO()
#         output_image.save(img_byte_arr, format="PNG")
#         img_byte_arr = img_byte_arr.getvalue()

#         return Response(content=img_byte_arr, media_type="image/png")
    
#     except Exception as e:
#         return {"error": str(e)}



















# from fastapi import FastAPI, File, UploadFile
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.responses import FileResponse
# from rembg import remove
# from PIL import Image
# import io

# app = FastAPI()

# # ✅ CORS Middleware - Next.js frontend ko allow karega
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  # Agar specific domain chahiye toh "http://localhost:3000" likho
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.get("/")
# def home():
#     return {"message": "FastAPI is running successfully!"}

# @app.post("/remove-bg/")
# async def remove_bg(file: UploadFile = File(...)):
#     try:
#         # Image ko read karo
#         image = Image.open(io.BytesIO(await file.read()))
#         image = image.convert("RGBA")

#         # Background remove karo
#         output_image = remove(image)

#         # Processed image ko temporary file me save karo
#         temp_image_path = "processed_image.png"
#         output_image.save(temp_image_path, format="PNG")

#         return FileResponse(temp_image_path, media_type="image/png", filename="bg_removed.png")

#     except Exception as e:
#         return {"error": str(e)}















# from fastapi import FastAPI, File, UploadFile
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.responses import Response
# from rembg import remove
# from PIL import Image
# import io
# import logging

# # Set up logging
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# app = FastAPI()

# # ✅ CORS Middleware - Allow both localhost and 127.0.0.1
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # Allow both formats
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.get("/")
# def home():
#     return {"message": "FastAPI is running successfully!"}

# @app.post("/remove-bg/")
# async def remove_bg(file: UploadFile = File(...)):
#     try:
#         logger.info(f"Processing file: {file.filename}, content-type: {file.content_type}")
        
#         # Read the image data
#         contents = await file.read()
#         logger.info(f"File read successfully, size: {len(contents)} bytes")
        
#         # Open the image
#         image = Image.open(io.BytesIO(contents))
#         image = image.convert("RGBA")
#         logger.info(f"Image opened successfully, size: {image.size}")
        
#         # Remove background
#         logger.info("Removing background...")
#         output_image = remove(image)
#         logger.info("Background removed successfully")
        
#         # Convert to bytes directly (avoid file system)
#         img_byte_arr = io.BytesIO()
#         output_image.save(img_byte_arr, format="PNG")
#         img_byte_arr = img_byte_arr.getvalue()
#         logger.info(f"Image converted to bytes, size: {len(img_byte_arr)} bytes")
        
#         # Return as direct response
#         return Response(content=img_byte_arr, media_type="image/png")
    
#     except Exception as e:
#         logger.error(f"Error processing image: {str(e)}", exc_info=True)
#         return {"error": str(e)}, 500




























# from fastapi import FastAPI, File, UploadFile
# from fastapi.middleware.cors import CORSMiddleware
# import logging

# # Set up logging
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# app = FastAPI()

# # Allow all origins for testing
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Allow all origins
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.get("/")
# def home():
#     logger.info("Home endpoint called")
#     return {"message": "FastAPI is running successfully!"}

# @app.get("/test")
# def test():
#     logger.info("Test endpoint called")
#     return {"status": "ok", "message": "Test endpoint working"}

# @app.post("/remove-bg/")
# async def remove_bg(file: UploadFile = File(...)):
#     try:
#         logger.info(f"Processing file: {file.filename}, content-type: {file.content_type}")
#         # Just return a success message for testing
#         return {"message": "File received successfully"}
#     except Exception as e:
#         logger.error(f"Error: {str(e)}", exc_info=True)
#         return {"error": str(e)}
































from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from rembg import remove
from PIL import Image
import io
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# CORS Middleware - Allow both localhost and 127.0.0.1
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    logger.info("Home endpoint called")
    return {"message": "FastAPI is running successfully!"}

@app.post("/remove-bg/")
async def remove_bg(file: UploadFile = File(...)):
    try:
        logger.info(f"Processing file: {file.filename}, content-type: {file.content_type}")
        
        # Read the image data
        contents = await file.read()
        logger.info(f"File read successfully, size: {len(contents)} bytes")
        
        # Open the image
        image = Image.open(io.BytesIO(contents))
        image = image.convert("RGBA")
        logger.info(f"Image opened successfully, size: {image.size}")
        
        # Remove background
        logger.info("Removing background...")
        output_image = remove(image)
        logger.info("Background removed successfully")
        
        # Convert to bytes
        img_byte_arr = io.BytesIO()
        output_image.save(img_byte_arr, format="PNG")
        img_byte_arr = img_byte_arr.getvalue()
        logger.info(f"Image converted to bytes, size: {len(img_byte_arr)} bytes")
        
        # Return as direct response
        return Response(content=img_byte_arr, media_type="image/png")
    
    except Exception as e:
        logger.error(f"Error processing image: {str(e)}", exc_info=True)
        return {"error": str(e)}