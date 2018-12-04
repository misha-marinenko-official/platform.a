#Package manager:
PM = yarn
all:
	rm -Rfv node_modules
	rm -Rfv frontend/node_modules
	rm -Rfv backend/node_modules
	cd backend; $(PM) install
	cd frontend; $(PM) install
	$(PM) install
backend:
	cd backend
	$(PM) install
frontend:
	cd frontend
	$(PM) install
cli:
	cd frontend
	$(PM) install
clean:
	rm -Rfv node_modules
	rm -Rfv frontend/node_modules
	rm -Rfv backend/node_modules
