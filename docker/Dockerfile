FROM python:3

WORKDIR /dashapp

RUN apt update
RUN apt install -y curl git

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chmod +x ./setup.sh
RUN ./setup.sh
CMD [ "python", "./webcam_demo.py" ]
