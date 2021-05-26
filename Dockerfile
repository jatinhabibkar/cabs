FROM python:3.8
ADD . /project
WORKDIR /project
RUN pip3 install -r req.txt
