import React, { FC, useEffect } from "react";
import AddArticleForm from "../components/Articles/AddArticleForm";
import { useTypedSelector } from "../hooks/useTypesSelector";
import { instance } from "../Instance";
import { ArticlesActionTypes, IArticle } from "../types/types";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchArticle } from "../store/action-creators/articles";
import Loader from "../components/Loader/Loader";

const EditArticle: FC = () => {
  const id = useParams().id;
  const { article, articles, loading } = useTypedSelector(
    (state) => state.articles
  );
  const user = useTypedSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateArticle = (body: any) => {
    const modifiedBody: any = {};
    if (body.title !== article?.title) {
      modifiedBody.title = body.title;
    }
    if (body.content !== article?.content) {
      modifiedBody.content = body.content;
    }

    instance
      .patch<IArticle>(`/news/articles/${id}/`, modifiedBody)
      .then((response) => {
        dispatch({
          type: ArticlesActionTypes.FETCH_ARTICLE_SUCCESS,
          payload: response.data,
        });
        if (articles) {
          const a = articles?.findIndex((obj) => {
            return obj.id === Number(id);
          });
          if (a !== -1) {
            let as = articles;
            as[a] = response.data;
            dispatch({
              type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
              payload: as,
            });
          }
        }
        navigate("/news/" + id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = "Edit news - Observers";
  }, []);

  useEffect(() => {
    if (isNaN(Number(id))) {
      navigate("/news");
      return;
    }
    if (user?.role.title !== "Admin") {
      navigate("/news/" + id);
      return;
    }

    dispatch(fetchArticle(Number(id)));
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="add-question-container">
          <h1 className="register-title">Edit Article</h1>
          <AddArticleForm
            title={article?.title}
            content={article?.content}
            buttonText="Edit"
            onSubmit={updateArticle}
          />
        </div>
      )}
    </>
  );
};

export default EditArticle;
