import { FormEvent, useRef, useState } from "react";
import { Col, Form, FormControl, Row, Stack, Button } from "react-bootstrap";
import ReactSelect from "react-select/creatable";
import { CreateNoteProps } from "./CreateNote";
import { Tag } from "../../types";

const NoteForm = ({ onSubmit }: CreateNoteProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([
    {
      id: "3",
      label: "Deneme",
    },
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  };

  console.log(selectedTags);
  return (
    <Form onSubmit={handleSubmit}>
      <Stack>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Başlık</Form.Label>
              <Form.Control ref={titleRef} required className="shadow" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect
                value={selectedTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => ({
                      label: tag.label,
                      id: tag.value,
                    }))
                  );
                }}
                isMulti
                className="shadow"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="markdown" className="my-4">
          <Form.Label>İçerik</Form.Label>
          <FormControl
            ref={markdownRef}
            as={"textarea"}
            required
            className="shadow"
          />
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Button type="submit">Kaydet</Button>
          <Button type="button" variant="secondary">
            İptal
          </Button>
        </div>
      </Stack>
    </Form>
  );
};

export default NoteForm;
